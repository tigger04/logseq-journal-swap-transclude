// This script requires the `@logseq/plugins` library

logseq.beforeRenderBlock(({ block, uuid }) => {
  // Check if the block is selected
  if (!block.isSelected) return;

  // Add a custom right-click menu item
  logseq.addBlockContextMenu(
    {
      title: "Move to Page & Embed Reference",
      fn: async () => {
        // Get the selected page URL
        const currentPageUrl = await logseq.getCurrentPage().url;

        // Prompt for target page URL
        const targetPageUrl = await logseq.ui.openInputPrompt({
          label: "Enter target page URL:",
        });

        if (!targetPageUrl) return;

        // Move the block to the target page
        await logseq.Editor.moveBlockToPage(uuid, targetPageUrl);

        // Create a transclusion back to the original block
        const transclusion = await logseq.Editor.createBlock({
          content: `[[${uuid}]]`,
          parent: currentPageUrl,
        });

        // Select the newly created transclusion block
        logseq.Editor.setSelection(transclusion.uuid);
      },
    },
    block
  );
});
