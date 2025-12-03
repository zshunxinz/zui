<script setup lang="ts">

defineProps<{
    list: any[]
    collapsed: boolean
    activeId: string
}>()

const emit = defineEmits<{ select: [id: string] }>()
const isLeaf = (node: any) => !node.children?.length
</script>

<template>
    <template v-for="node in list" :key="node.id">
        <!-- 叶子节点 -->
        <SidebarMenuItem v-if="isLeaf(node)">
            <SidebarMenuButton :active="activeId === node.id" @click="emit('select', node.id)">
                <Icon :name="node.icon" size="16" />
                <span v-if="!collapsed" class="ml-2">{{ node.label }}</span>
            </SidebarMenuButton>
        </SidebarMenuItem>

        <!-- 可折叠组 -->
        <SidebarGroup v-else defaultOpen>
            <SidebarGroupLabel>
                <div class="group-label">
                    <Icon :name="node.icon" :size="18" />
                    <span v-if="!collapsed" class="ml-2">{{ node.label }}</span>
                </div>
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <MenuTreeNode :list="node.children!" :collapsed="collapsed" :activeId="activeId"
                    @select="emit('select', $event)" />
            </SidebarGroupContent>
        </SidebarGroup>
    </template>
</template>

<style scoped>
.group-label {
    display: flex;
    align-items: center;
}
</style>