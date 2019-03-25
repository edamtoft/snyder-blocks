const { registerBlockType } = wp.blocks;
const { PlainText, MediaUpload, InspectorControls, ColorPalette } = wp.editor;
const { Button, TextControl, RangeControl } = wp.components;

registerBlockType("snyder-blocks/card", {
  title: "Snyder Card",

  parent: [ "snyder-blocks/card-container" ],

  icon: "format-image",

  category: "layout",

  attributes: {
    backgroundImage: { type: "string" },
    backgroundImageId: { type: "number" },
    overlayColor: { type: "string" },
    fontColor: { type: "string" },
    title: { type: "string" },
    subtitle: { type: "string" },
    link: { type: "string" },
    opacity: { type: "number" }
  },

  edit({ className, attributes: { title, subtitle, link, overlayColor, backgroundImage, backgroundImageId, fontColor, opacity }, setAttributes }) {
    return <div className={className + " snyder-blocks-card"} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <InspectorControls>
        <div>
          <TextControl label="Title" value={title} onChange={value => setAttributes({ title: value })} />
        </div>
        <div>
          <TextControl label="Subtitle" value={subtitle} onChange={value => setAttributes({ subtitle: value })} />
        </div>
        <div>
          <TextControl label="Link" value={link} onChange={value => setAttributes({ link: value })} />
        </div>
        <div>
          <strong>Background Image:</strong>
          <MediaUpload value={backgroundImageId}
            onSelect={media => setAttributes({ backgroundImage: media.url, backgroundImageId: media.id })}
            allowedTypes="image"
            render={({ open }) => <Button className="is-button" onClick={open}>{backgroundImageId ? <img src={backgroundImage} /> : "Upload Image"}</Button>} />
        </div>
        <div>
          <strong>Overlay Color</strong>
          <ColorPalette value={overlayColor} onChange={value => setAttributes({ overlayColor: value })} />
        </div>
        <div>
          <RangeControl label="Overlay Opacity" value={opacity} min={0} max={100} onChange={value => setAttributes({ opacity: value })} />
        </div>
        <div>
          <strong>Font Color</strong>
          <ColorPalette value={fontColor} onChange={value => setAttributes({ fontColor: value })} />
        </div>
      </InspectorControls>
      <div className="snyder-card-title-bar">
        <div className="snyder-card-title-bar-overlay" style={{ backgroundColor: overlayColor, opacity: opacity / 100 }}></div>
        <h3 className="snyder-card-title" style={{ color: fontColor }}>{title}</h3>
        {subtitle ? <h4 className="snyder-card-subtitle" style={{ color: fontColor }}>{subtitle}</h4> : null}
      </div>
    </div>;
  },

  save({ attributes: { title, subtitle, link, backgroundImage, overlayColor, fontColor, opacity } }) {
    return <a href={link} className="snyder-blocks-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="snyder-card-title-bar">
        <div className="snyder-card-title-bar-overlay" style={{ backgroundColor: overlayColor, opacity: opacity / 100 }}></div>
        <h3 className="snyder-card-title" style={{ color: fontColor }}>{title}</h3>
        {subtitle ? <h4 className="snyder-card-subtitle" style={{ color: fontColor }}>{subtitle}</h4> : null}
      </div>
    </a>;
  }
})