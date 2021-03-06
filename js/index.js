import * as d3 from "d3";

// global data and image paths

// small
const dataDirName = 'lesmis';
// const dataDirName = 'sec-sale'; // labels
// const dataDirName = 'sec-purchase'; // labels
// const dataDirName = 'moreno_names';
// const dataDirName = 'ego-gplus';

// yelp
// const dataDirName = 'yelp-k6d5'
// const dataDirName = "yelp-k6d8"
// const dataDirName = "yelp-k9d8"

// const dataDirName = "yelp-k3d6";
// const dataDirName = "yelp-k3d7";
// const dataDirName = "yelp-k3d8";
// const dataDirName = "yelp-k3d9";

// const dataDirName = "yelp-k4d6";
// const dataDirName = "yelp-k4d7";
// const dataDirName = "yelp-k4d8";
// const dataDirName = "yelp-k4d9";

// const dataDirName = "yelp-k5d6";
// const dataDirName = "yelp-k5d7";
// const dataDirName = "yelp-k5d8";
// const dataDirName = "yelp-k5d9";

// medium
// const dataDirName = "astroph";
// const dataDirName = 'glove'; // labels
// const dataDirName = 'com-amazon';
// const dataDirName = 'stackexchange';
// const dataDirName = 'word2vec-twitter'; // labels

// large
// const dataDirName = 'google-movie'; // labels
// const dataDirName = 'dblp';
// const dataDirName = 'patentcite';
// const dataDirName = 'wikipedia-de';
// const dataDirName = 'trackers-trackers';


export const dataPath = "data/" + dataDirName + "/";
export const dataPathJSON = "data/" + dataDirName + "/" + dataDirName + ".json";

export function dataPathLayerJSON(peel) {
  return "data/" + dataDirName + "/" + dataDirName + "-layer-" + peel + ".json";
}
export function imagePathLayerOrg(peel) {
  return "data/" + dataDirName + "/images/" + "layer" + peel + ".png";
}
export function imagePathLayerFD(peel) {
  return "data/" + dataDirName + "/images/" + "layer-" + peel + ".png";
}
export function imagePathLayerContour(peel) {
  return (
    "data/" + dataDirName + "/images/" + "contour-shaded-layer-" + peel + ".png"
  );
}
export function imagePathOverview2DBackground() {
  return "data/" + dataDirName + "/images/" + dataDirName + "-bw.png";
}

window.d3 = d3;

function reloadPage() {
  window.location.reload();
}
d3.select("#header-text-span").on("click", reloadPage);

d3.json(dataPathJSON, function(error, data) {
  if (error) {
    return console.error(error);
  }
  
  // set nav data
  var navNumFormat = d3.format(",");
  d3.select("#graph-value").text(data.name);
  d3.select("#vertices-value").text(navNumFormat(data.vertices));
  d3.select("#edges-value").text(navNumFormat(data.edges));
  d3.select("#graph-description").text(data.description);
});

d3.select("#header-icon-link")
  .attr("href", "https://github.com/fredhohman/atlas");