import { computed, type ComputedRef } from 'vue';

export interface OptionStyle {
  paddingLeft: string;
}

export interface GroupStyle {
  marginLeft: string;
  fontSize: string;
  opacity: string;
  padding: string;
}

/**
 * 选项和分组样式计算的 composable
 */
export function useSelectStyles() {
  /**
   * 计算选项的动态样式
   * @param level 选项所在的层级
   * @returns 样式对象
   */
  const getOptionStyle = (level: number): OptionStyle => {
    const baseIndent = level * 6; // 选项每层缩进6px
    return {
      paddingLeft: `${12 + baseIndent}px`, // 基础padding 12px + 层级缩进
    };
  };

  /**
   * 计算分组标签的动态样式
   * @param level 分组所在的层级
   * @returns 样式对象
   */
  const getGroupLabelStyle = (level: number): GroupStyle => {
    const baseIndent = level * 6; // 每层缩进6px
    return {
      marginLeft: `${baseIndent}px`,
      fontSize: `${level > 1 ? '11px' : '12px'}`,
      opacity: `${Math.max(1 - level * 0.1, 0.6)}`, // 每层递减0.1，最小0.6
      padding: `${level > 1 ? '6px 12px' : '8px 12px'}`,
    };
  };

  /**
   * 计算选项区域的动态样式
   * @param level 分组所在的层级
   * @returns 样式对象
   */
  const getOptionsAreaStyle = (level: number) => {
    const baseIndent = level * 4; // 选项区域每层缩进4px
    return {
      marginLeft: `${baseIndent}px`,
    };
  };

  return {
    getOptionStyle,
    getGroupLabelStyle,
    getOptionsAreaStyle,
  };
}

/**
 * 层级计算的 composable
 */
export function useGroupLevel() {
  /**
   * 通过组件实例手动计算层级
   * @param instance 当前组件实例
   * @returns 层级数值
   */
  const calculateLevelFromInstance = (instance: any): number => {
    let parent = instance?.parent;
    let level = 0;

    while (parent) {
      const isOptionGroup =
        parent.type &&
        (parent.type.name === 'OptionGroup' ||
          parent.type.__name === 'OptionGroup' ||
          (parent.type.__file &&
            parent.type.__file.includes('OptionGroup.vue')));

      if (isOptionGroup) {
        level++;
      }
      parent = parent.parent;
    }

    return level;
  };

  return {
    calculateLevelFromInstance,
  };
}
