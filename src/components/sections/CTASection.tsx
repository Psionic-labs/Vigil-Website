"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <Section background="gray" animate={false} className="text-center">
      {/* Header */}
      <SectionHeader
        title="Stop watching replays. Start fixing bugs."
        description="Vigil triages every session automatically. Your first 1,000 sessions are free."
        className="mb-10"
      />

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
      >
        <Button href="#install" variant="primary" size="lg" className="w-full sm:w-auto">
          Get started free
        </Button>
        <Button href="#docs" variant="secondary" size="lg" className="w-full sm:w-auto">
          Read the docs
        </Button>
      </motion.div>

      {/* Supporting notice */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-[10px] font-bold uppercase tracking-widest text-slate-400"
      >
        No credit card required. Installs in under 2 minutes.
      </motion.p>
    </Section>
  );
}
