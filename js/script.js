document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            console.log('Search button clicked');
        });
    }
});


{/* <script>  ไม่เอาแล้ว
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth' // เลื่อนหน้าแบบนุ่มนวล
        });
    }
</script> */}
