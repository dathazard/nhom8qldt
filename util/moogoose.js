module.exports = {
    muTiplemongoseObject : function(course){
      return  course = course.map(course=>course.toObject());
    },
    mongoseObject : function(courses){
        return  courses ? courses.toObject() : courses;
      },
};