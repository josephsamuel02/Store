import { createSlice } from "@reduxjs/toolkit";

const AllHtmlTemplates = {
  text: {
    type: "text",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    font_size: 16,
    bold: false,
    align: "left",
    underline: false,
    italic: false,
    color: "black",
    background_color: "white",
    px: 5,
    py: 5,
    link: "",
  },

  button: {
    type: "button",
    text: "Sign up",
    font_size: 28,
    bold: false,
    underline: false,
    italic: false,
    color: "white",
    background_color: "#94C43D",
    width: 80,
    height: 25,
    px: 110,
    py: 13,
    link: "https://github.com",
  },

  image: {
    type: "image",
    image_file: "./svg/login page left BG.svg",
    link: "",
    objectFit: "cover",
    width: 100,
    height: 250,
    px: 5,
    py: 5,
  },

  space: {
    type: "space",
    background_color: "white",
    px: 5,
    py: 40,
  },
  video: {
    type: "video",
    video_url: "mnIGv6nYIidRVxFi",
    url: "",
    width: 100,
    height: 270,
    px: 5,
    py: 5,
  },
  template_1: {
    type: "template_1",
    background_color: "white",
    width: 80,
    height: 25,
    px: 5,
    py: 5,
  },
  template_2: {
    type: "template_2",
    background_color: "white",
    width: 80,
    height: 25,
    px: 5,
    py: 5,
  },
};

const initialState = {
  templateLayers: <any[]>[
    {
      type: "nav",
    },
  ],
  selectedTemplateLayer: <any>{},
  isLoading: false,
  error: null,
};

const HTMLTemplatesReducer = createSlice({
  name: "HTMLTemplatesReducer",
  initialState: initialState,
  reducers: {
    add_template_layer: (state, { payload }) => {
      let newTemplate = {};
      payload == "text" ? (newTemplate = AllHtmlTemplates.text) : null;
      payload == "button" ? (newTemplate = AllHtmlTemplates.button) : null;
      payload == "image" ? (newTemplate = AllHtmlTemplates.image) : null;
      payload == "video" ? (newTemplate = AllHtmlTemplates.video) : null;
      payload == "space" ? (newTemplate = AllHtmlTemplates.space) : null;
      payload == "template_1" ? (newTemplate = AllHtmlTemplates.template_1) : null;
      payload == "template_2" ? (newTemplate = AllHtmlTemplates.template_2) : null;

      state.templateLayers.push(newTemplate);
    },

    update_template_layer: (state, { payload }) => {
      state.templateLayers[payload[0]] = {
        ...state.templateLayers[payload[0]],
        ...payload[1],
      };
    },

    remove_template_layer: (state, { payload }) => {
      let newTemplate = state.templateLayers.filter(
        (layer) => layer !== state.templateLayers[payload]
      );

      state.templateLayers = newTemplate;
    },
    selected_template_layer: (state, { payload }) => {
      state.selectedTemplateLayer = payload;
    },
  },
});

export const {
  add_template_layer,
  update_template_layer,
  remove_template_layer,
  selected_template_layer,
} = HTMLTemplatesReducer.actions;
export default HTMLTemplatesReducer.reducer;
