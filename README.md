

**Leaflet Redliner**
----------------

*A Leaflet plugin used to add markup to maps. Requires the PanelManager plugin.*

**Installation**:

**Step 1 - Add PanelManager to the map**

 - Link `panelManager.css` in the head section
 - Link `panelManager.js` in the body section after instantiating a map
   in a "map" div
 - After `panelManager.js`, add PanelManager to the map:
 `var panelManager = L.PanelManager.addTo(map);`

**Step 2  - Add Redliner to the map**

 - Link `redliner.css` in the head section (after `panelManager.css`)
 - Link `redliner.js` in the body section (after `panelManager.js`)
 - Add Redliner to map with:
 `var redliner = L.Redliner.addTo(map);`

**Step 3 - Load Redliner into PanelManager**
 - `map.PanelManager.loadPlugin(map.Redliner);`

See `index.html` for an example.
