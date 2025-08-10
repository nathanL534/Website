"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BorderBeam } from "@/components/ui/border-beam";
import { Reveal } from "../magicui/reveal";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Tell me a bit more")
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    reset();
  }

  return (
    <Reveal>
    <section id="contact" className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s chat about how we can work together!
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="relative backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <BorderBeam size={400} duration={15} delay={0} />
          
          <div className="space-y-8">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                Send me a message
              </h3>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                I&apos;m always interested in hearing about new opportunities and exciting projects. 
                Drop me a line and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Name</label>
                <input 
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-700 px-4 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all shadow-sm" 
                  {...register("name")} 
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-xs text-rose-600 mt-2 font-medium">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Email</label>
                <input 
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-700 px-4 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all shadow-sm" 
                  {...register("email")} 
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-xs text-rose-600 mt-2 font-medium">{errors.email.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Message</label>
                <textarea 
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-700 px-4 py-4 min-h-32 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none shadow-sm" 
                  {...register("message")} 
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && <p className="text-xs text-rose-600 mt-2 font-medium">{errors.message.message}</p>}
              </div>
              
              <div className="relative pt-4">
                <button 
                  disabled={isSubmitting} 
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 disabled:opacity-50 text-white shadow-lg ring-1 ring-black/5 hover:shadow-xl transform hover:-translate-y-0.5 transition-all w-full justify-center text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a7.646 7.646 0 110 15.292V12" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
                <BorderBeam size={200} duration={10} delay={1} />
              </div>
            </form>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Response Time</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">24 Hours</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Available</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">Always</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Projects</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">Open</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}


