const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType("snyder-blocks/card-container", {
  title: "Snyder Card Container",

  icon: "format-image",

  category: "layout",

  edit({ className }) {
    return <div className={className + " snyder-card-container"} >
      <InnerBlocks allowedBlocks={"snyder-blocks/card"} />
    </div>;
  },

  save() {
    return <div className="snyder-card-container">
      <InnerBlocks.Content />
    </div>;
  }
})