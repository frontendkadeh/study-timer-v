import { ref , computed } from "vue";

export default function timer() {
    const content = ref('');

    const calcStr = computed(() => {
        const text = content.value.trim(); 
        return text.length === 0 ? 0 : text.replace(/[!?,.]/g, " ").split(/\s+/).length;
    });

    const studyTimer = computed(() => { 
        if (calcStr.value === 0) return 0;
        if (calcStr.value <= 300) return 1;
        return Math.round(calcStr.value / 300);
    });
    
    const deleteContent =  ()=> {
        content.value = " "
    }

    
    return {
        studyTimer,
        content,
        calcStr,
        deleteContent
        
    }
}
