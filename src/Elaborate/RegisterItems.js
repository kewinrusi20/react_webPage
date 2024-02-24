import "./RegisterItems.css"

import CatalogCombo from "../data/CatalogCombo.json"

let Registry = [];

function RegisterItems(item) {
    if (!Registry.includes(item.name)) {
        Registry.push(item.name)
    }
}

export default RegisterItems;
export {Registry};