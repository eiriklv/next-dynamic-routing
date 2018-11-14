export default async function getPageById(id) {
  const pages = {
    'frontpage': {
      "_id": "a82a3748-8bbc-4a50-ab8b-43f5d59dac07",
      "_type": "page",
      "sections": [
        {
          "_key": "aa16973129e0",
          "_type": "dynamic-section",
          "title": "Dynamic Section 1"
        },
        {
          "_key": "a457436429938",
          "_type": "dynamic-section",
          "title": "Dynamic Section 2"
        },
        {
          "_key": "b457436429938",
          "_type": "static-section",
          "title": "Static Section 1"
        },
      ],
      "slug": {
        "_type": "slug",
        "current": "default"
      },
      "title": "FrontPage"
    },
    'subpage': {
      "_id": "b82a3748-8bbc-4a50-ab8b-43f5d59dac07",
      "_type": "page",
      "sections": [
        {
          "_key": "ba16973129e0",
          "_type": "static-section",
          "title": "Static Section 1"
        },
        {
          "_key": "457436429938",
          "_type": "static-section",
          "title": "Static Section 2"
        },
        {
          "_key": "c457436429938",
          "_type": "dynamic-section",
          "title": "Dynamic Section 1"
        },
      ],
      "slug": {
        "_type": "slug",
        "current": "default"
      },
      "title": "SubPage"
    },
    'error': {
      "_id": "error",
      "_type": "page",
      "title": "Error / 404",
      "slug": {
        "_type": "slug",
        "current": "empty"
      },
    },
  };

  return pages[id] || pages['error'];
}
