const EventMultiMedia = ({data}) => {
  const firstPart =
    '<style>.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/';
  
  const secondPart =
    '/vt/frame" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>';
  
    return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${firstPart}${data.value}${secondPart}`,
      }}
      className='rounded-lg overflow-hidden'
    ></div>
  );
};

export default EventMultiMedia;
