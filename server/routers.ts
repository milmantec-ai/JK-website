import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import nodemailer from "nodemailer";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email address"),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const gmailUser = process.env.GMAIL_USER;
          const gmailPassword = process.env.GMAIL_PASSWORD;

          if (!gmailUser || !gmailPassword) {
            console.error("Gmail credentials missing", {
              hasUser: !!gmailUser,
              hasPassword: !!gmailPassword,
            });
            throw new Error("Email service not configured");
          }

          // Configure email transporter using Gmail with explicit SMTP settings
          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: gmailUser,
              pass: gmailPassword,
            },
          });

          // Send email
          await transporter.sendMail({
            from: gmailUser,
            to: "jkbpaintings@gmail.com",
            subject: `New Contact Form Submission from ${input.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${input.name}</p>
              <p><strong>Email:</strong> ${input.email}</p>
              <p><strong>Message:</strong></p>
              <p>${input.message.replace(/\n/g, "<br>")}</p>
            `,
            replyTo: input.email,
          });

          return {
            success: true,
            message: "Email sent successfully",
          };
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : "Unknown error";
          console.error("Email error:", {
            message: errorMsg,
            code: (error as any)?.code,
          });
          throw new Error("Failed to send email: " + errorMsg);
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
