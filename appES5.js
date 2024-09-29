function Course(title, instructor, image){       //constructor oluşturma
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}





document.getElementById('new-course').addEventListener('submit',
    function(e){
           
        const title = document.getElementById('title').value;
        const instructor =document.getElementById('instructor').value;
        const image = document.getElementById('image').value;
  
        //course nesnesi oluşturuluyor
        const course = new Course(title,instructor,image);

        
        e.preventDefault(); //Submit olayını kesmek için
});