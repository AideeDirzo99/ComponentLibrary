<template>
  <div class="code-viewer-container">
    <pre><code class="language-xml">{{ cleanedCode }}</code></pre>
  </div>
</template>

<script setup lang="ts">
/* -------------------------------------------------------------------------- */
/* IMPORTS                                                                    */
/* -------------------------------------------------------------------------- */
import { ref, onMounted, nextTick, watch } from 'vue';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/github-dark.css';

/* Register languages */
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

/* -------------------------------------------------------------------------- */
/* LOCAL TYPES & INTERFACES                                                   */
/* -------------------------------------------------------------------------- */
interface Props {
  /** File name to load from src/componentsTextCode */
  fileName: string;
}

/* -------------------------------------------------------------------------- */
/* PROPS                                                                      */
/* -------------------------------------------------------------------------- */
const props = defineProps<Props>();

/* -------------------------------------------------------------------------- */
/* EMITS                                                                      */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* COMPOSABLES & STORES                                                       */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* STATE (refs, reactive, constants)                                          */
/* -------------------------------------------------------------------------- */
const cleanedCode = ref('');

/* -------------------------------------------------------------------------- */
/* COMPUTED                                                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* WATCHERS                                                                   */
/* -------------------------------------------------------------------------- */
watch(
  () => props.fileName,
  async () => {
    await loadCodeFile();
  },
);

/* -------------------------------------------------------------------------- */
/* METHODS                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Loads the raw txt file dynamically based on the fileName prop.
 */
const loadCodeFile = async () => {
  try {
    const response = await fetch(`/componentsTextCode/${props.fileName}`);
    if (!response.ok) {
      throw new Error('File not found');
    }

    const text = await response.text();
    cleanedCode.value = text.trimStart();

    await nextTick();
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  } catch (err) {
    cleanedCode.value = `// Error: file "${props.fileName}" not found`;
    console.log(err);
  }
};

/* -------------------------------------------------------------------------- */
/* LIFECYCLE HOOKS                                                            */
/* -------------------------------------------------------------------------- */
onMounted(async () => {
  await loadCodeFile();
});
</script>

<style scoped lang="scss">
.code-viewer-container {
  width: 100%;
  height: 100%;
  overflow: auto;

  pre {
    word-break: break-word;
    max-width: 100%;
    margin: 0;
  }
}
</style>
