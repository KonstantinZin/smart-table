import {rules, createComparison, rules} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const search = createComparison(rules.skipEmptyTargetValues, 
       [ rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]);
    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(row => search(row, state));
    }
}