const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls, ColorPalette } = wp.editor;

registerBlockType("snyder-blocks/container", {
  title: "Snyder Container",

  icon: "format-image",

  category: "layout",

  attributes: {
    backgroundColor: { type: "string" }
  },

  edit({ className, attributes: { backgroundColor }, setAttributes }) {
    return <div className={className}>
      <InspectorControls>
        <ColorPalette title="Background Color" value={backgroundColor} onChange={value => setAttributes({ backgroundColor: value })} />
      </InspectorControls>
      <div style={{backgroundColor}}>
        <InnerBlocks />
      </div>
    </div>;
  },

  save({ attributes: { backgroundColor } }) {
    return <div style={{backgroundColor}}>
      <InnerBlocks.Content />
    </div>;
  }
})