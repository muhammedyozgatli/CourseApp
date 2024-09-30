//course constructor 
function Course(title, instructor, image){       
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

// UI constructor
function UI(){
}

UI.prototype.addCourseToList = function(course){
    const list = document.getElementById('course-list');

    var html = `
        <tr>
            <td><img src="img/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href='#' class="btn btn-danger btn-sm">Delete</a></td>
        </tr>
    `;
    list.innerHTML += html; 
}

UI.prototype.clearControls = function(course){
    
    const title = document.getElementById('title').value="";
    const instructor =document.getElementById('instructor').value="";
    const image = document.getElementById('image').value="";
}


document.getElementById('new-course').addEventListener('submit',
    function(e){
           
        const title = document.getElementById('title').value;
        const instructor =document.getElementById('instructor').value;
        const image = document.getElementById('image').value;
  
        //course nesnesi oluşturuluyor
        const course = new Course(title,instructor,image);

        //UI olusturuluyor
        const ui = new UI();
        
        //course listesi ekleniyor
        ui.addCourseToList(course);

        //clear controls
        ui.clearControls();

        e.preventDefault(); //Submit olayını kesmek için
});