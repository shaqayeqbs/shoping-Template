(() => {
  "use ";
  self.fallback = async (e) => {
    switch (e.destination) {
      case "document":
        return caches.match("/_offline", { ignoreSearch: !0 });
      case "image":
        0;
      case "audio":
        0;
      case "video":
        0;
      case "font":
        0;
      case "":
        0;
      default:
        return Response.error();
    }
  };
})();
