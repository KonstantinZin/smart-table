import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    // Получаем правило поиска
    const searchRule = rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false);
    
    // Создаём компаратор
    const search = createComparison(
        [], 
        [rules.skipEmptyTargetValues, searchRule]
    );
    
    return (data, state, action) => {
        // Если поиск пустой - возвращаем все данные
        if (!state[searchField] || state[searchField].trim() === '') {
            return data;
        }
        
        // Иначе - фильтруем
        return data.filter(row => search(row, state));
    }
}