<template>
    <button :class="computedClass">
        <slot/>
    </button>
</template>
<script>
export default{
    props:{
        className:String,
    },
    setup(props,ctx){
        const computedClass=computed(()=>{
            return props.className
        })
        return{
            computedClass
        }
    }
}
</script>