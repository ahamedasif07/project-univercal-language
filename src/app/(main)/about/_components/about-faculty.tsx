"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Award } from "lucide-react";
import { Container } from "@/components/common/container";
import { INSTRUCTORS } from "@/data/instructors";

export function AboutFaculty() {
  return (
    <section id="faculty-section" className="py-20 sm:py-24 relative overflow-hidden bg-background">
      <Container>
        {/* Minimal Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Master Faculty</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-[1.15]">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 dark:from-blue-400 dark:via-primary dark:to-indigo-300 bg-clip-text text-transparent">
              Certified Mentors
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Every instructor has achieved elite official scores and received direct Pearson South Asia training.
          </p>
        </div>

        {/* Minimal Classy 3-Card Teacher Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-border/80 dark:border-slate-800 bg-card shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col"
            >
              {/* Full Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index === 0}
                />

                {/* Refined gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-[#081528]/60 via-45% to-transparent pointer-events-none" />

                {/* Clean Top Score Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b3a82]/90 text-white font-bold text-xs shadow-md backdrop-blur-md border border-white/20">
                    <Award className="w-3.5 h-3.5 text-blue-300" />
                    <span>{instructor.scoreHighlight}</span>
                  </div>
                </div>

                {/* Official Level 2 Accredited Badge */}
                {instructor.officialBadgeImage && (
                  <div className="absolute top-3.5 right-3.5 z-10 w-11 h-11 drop-shadow-lg">
                    <Image
                      src={instructor.officialBadgeImage}
                      alt="Pearson Level 2 Certified Badge"
                      fill
                      sizes="44px"
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Minimalist Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white space-y-3">
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-blue-200 transition-colors">
                      {instructor.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-300 mt-0.5">
                      {instructor.title}
                    </p>
                  </div>

                  <Link
                    href={`/about/instructors/${instructor.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0b3a82] via-primary to-blue-600 hover:from-[#082b61] hover:to-[#0b3a82] shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
