import SliderComponent from './Slider.vue';

// 在Vue 3的<script setup>中，类型需要通过组件实例的类型来访问
export type SliderProps = InstanceType<typeof SliderComponent>['$props'];
export const Slider = SliderComponent;
export default Slider;