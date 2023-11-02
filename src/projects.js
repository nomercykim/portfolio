'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories  =  document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event)=>{
    const filter = event.target.dataset.filter;
    if(filter == null){
        return;
    }
    handleActvieSelection(event.target);
    filterProjects(filter);
})


function handleActvieSelection(target){
    const actvie = document.querySelector('.category--selected');
    actvie.classList.remove('category--selected');
    target.classList.add('category--selected');
}

function filterProjects(filter){
    projectsContainer.classList.add('anim-out');
    projects.forEach(project =>{
        if(filter === 'all' || filter === project.dataset.type){
            project.style.display ='block';      
        }
        else{
            project.style.display ='none';
        }
    });
    setTimeout(() => {
        projectsContainer.classList.remove('anim-out');
    }, 250);
}