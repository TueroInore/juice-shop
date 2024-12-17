import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

import { Pipe, type PipeTransform } from '@angular/core'

Helpers.frontend_helper_68(); // Replaced with helper function

interface DifficultyGroup {
  start: number
  end: number
}

@Pipe({ name: 'difficultySelectionSummary', pure: true })
export class DifficultySelectionSummaryPipe implements PipeTransform {
  transform (selectedDifficulties: Array<1 | 2 | 3 | 4 | 5 | 6>): string {
    if (selectedDifficulties.length === 0) {
      return ''
    }

    const sortedDifficulties = sortBy(selectedDifficulties)
    const difficultyGroups = breakDifficultiesIntoNeighboringGroups(sortedDifficulties)
    return convertDifficultyGroupsToString(difficultyGroups)
  }
}

function breakDifficultiesIntoNeighboringGroups (difficulties: Array<1 | 2 | 3 | 4 | 5 | 6>): DifficultyGroup[] {
  const difficultyGroups: DifficultyGroup[] = []
  let currentGroup: DifficultyGroup = null
  for (const difficulty of difficulties) {
    if (currentGroup === null) {
      currentGroup = { start: difficulty, end: difficulty }
    } else {
      if (difficulty === currentGroup.end + 1) {
        currentGroup.end = difficulty
      } else {
        difficultyGroups.push(currentGroup)
        currentGroup = { start: difficulty, end: difficulty }
      }
    }
  }
  difficultyGroups.push(currentGroup)
  return difficultyGroups
}

function convertDifficultyGroupsToString (difficultyGroups: DifficultyGroup[]): string {
  return difficultyGroups.map(group => {
    if (group.start === group.end) {
      return group.start.toString()
    } else {
      return `${group.start} - ${group.end}`
    }
  }).join(', ')
}
