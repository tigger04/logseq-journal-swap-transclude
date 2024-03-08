const { onShortcut, onDispatch, getCurrentPage, getBlockUuid } = await import('logseq');

// onShortcut('your-shortcut-key', async () => {
//   const currentPage = await getCurrentPage();
//   const selectedBlock = await logseq.getSelection();

//   if (!selectedBlock || selectedBlock.length === 0) {
//     return console.warn('Please select a block to move');
//   }

//   const blockUuid = await getBlockUuid(selectedBlock[0].ref); // Get the UUID of the selected block
//   const targetPage = await logseq.getPageTitle('Target Page Name'); // Replace with logic to get the target page title

//   if (!targetPage) {
//     return console.warn('Target page not found');
//   }

//   await logseq.appendBlock(targetPage, `[[${blockUuid}]]`); // Append reference to target page

//   // Remove the block from the current page (optional)
//   // await logseq.deleteBlock(selectedBlock[0].ref);

//   console.log('Block moved and reference added successfully');
// });

// logseq.ready(() => {
//   logseq.App.showMsg("Hello World Logseq!");
// }).catch(console.error);

// logseq.provide('swap-transclude', async (e) => {
//   const { blockId, content } = e.detail;
//   const block = await logseq.Editor.getBlock(blockId);
//   const newContent = content.replace(/!\[\[([^\]]+)\]\]/g, (match, p1) => {
//     return `[[${p1}]]`;
//   });
//   await logseq.Editor.updateBlock(blockId, newContent);
// });

function handleSwapTranscludeClick(blockId) {
  // Code to handle the menu item click
  console.log("Menu item clicked for block:", blockId);
  // You can perform any action you want here
}

logseq.provideCommand("Swap-Transclude", {
  // This function will be called when the menu item is clicked
  handler: (ctx) => {
    handleSwapTranscludeClick(ctx.block.id);
  },
});

logseq.ready(() => {

  logseq.App.showMsg("Hello World Logseq!");

  // logseq.Editor.registerBlockContextMenu("Journal-Swap", [
  //   {
  //     label: "Swap-Transclude",
  //     action: "Swap-Transclude",
  //   },
  // ]);
});





// onDispatch('block-context-menu-open', async (payload) => {
//   // Add the option to the block context menu (optional)
//   payload.push({
//     label: 'Move with Reference',
//     onClick: async () => {
//       // Move block logic here using the above code

//       const currentPage = await getCurrentPage();
//       const selectedBlock = await logseq.getSelection();

//       if (!selectedBlock || selectedBlock.length === 0) {
//         return console.warn('Please select a block to move');
//       }

//       const blockUuid = await getBlockUuid(selectedBlock[0].ref); // Get the UUID of the selected block
//       const targetPage = await logseq.getPageTitle('Target Page Name'); // Replace with logic to get the target page title

//       if (!targetPage) {
//         return console.warn('Target page not found');
//       }

//       await logseq.appendBlock(targetPage, `[[${blockUuid}]]`); // Append reference to target page

//       // Remove the block from the current page (optional)
//       // await logseq.deleteBlock(selectedBlock[0].ref);

//       console.log('Block moved and reference added successfully');

//     },
//   });
// });
