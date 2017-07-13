import { LOAD_SETTINGS_SUCCESS, TOGGLE_SECTION_COLLAPSE } from '../../actions/settings'

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_SETTINGS_SUCCESS:
      if (!action.settings) return state
      return action.settings.collapsedSections
    case TOGGLE_SECTION_COLLAPSE:
      return state.includes(action.section)
        ? state.filter(section => section !== action.section)
        : state.concat(action.section)
    default:
      return state
  }
}