import { defineCollection } from 'astro:content'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { z } from 'astro:content'

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Every factual page must carry these. See /verification/.
        verified: z
          .object({
            // Date a human last checked this against a source.
            // Accepts YAML dates (2026-07-19) and quoted strings alike.
            date: z
              .union([z.string(), z.date()])
              .transform((d) =>
                d instanceof Date ? d.toISOString().slice(0, 10) : d,
              )
              .optional(),
            // Who checked (GitHub handle).
            by: z.string().optional(),
            // 'primary'  = confirmed on the provider's own site/docs/support
            // 'reported' = first-hand experience from a named contributor
            // 'hearsay'  = repeated in community discussion, nobody re-checked
            level: z.enum(['primary', 'reported', 'hearsay']).default('hearsay'),
          })
          .optional(),
        // Set true on pages where facts rot fast (fees, availability, uptime).
        volatile: z.boolean().default(false),
      }),
    }),
  }),
}
