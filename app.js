import { initMap } from "./js/map.js";
import { initUI } from "./js/ui.js";
import { loadMetar } from "./js/metar.js";
import { loadTaf } from "./js/taf.js";
import { loadFids } from "./js/fids.js";

window.onload = () => {
    window.map = initMap();
    initUI();
    loadMetar();
    loadTaf();
    loadFids();
};
