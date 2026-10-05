import React from 'react';
import { personalData } from '../data';

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-natural-100/60 dark:bg-natural-950 border-t border-natural-200/60 dark:border-natural-800/60 text-natural-600 dark:text-natural-400 text-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="font-medium text-xs sm:text-sm">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-natural-900 dark:text-natural-100 font-bold">
            {personalData?.brandName || "RASMANTECH"}
          </span>{' '}
          ({' '}
          <a
            href={`https://${personalData?.domain || "rasmantech.web.id"}`}
            target="_blank"
            rel="noreferrer"
            className="text-accent dark:text-emerald-400 hover:underline"
          >
            {personalData?.domain || "rasmantech.web.id"}
          </a>{' '}
          ). All rights reserved.
        </p>
        <p className="text-xs text-natural-500 dark:text-natural-400">
          Dikembangkan oleh{' '}
          <span className="text-accent dark:text-emerald-400 font-semibold">
            {personalData?.name || "Rasman Juliadi"}
          </span>.
        </p>
      </div>
    </footer>
  );
}
