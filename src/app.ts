import { defineApp } from 'iles'
import Paragraph from "~/components/Paragraph.vue"

export default defineApp({
  mdxComponents: {
    p: Paragraph
  }
})
