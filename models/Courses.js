import {Schema, model} from 'mongoose'

const CourseSchema = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true, },
	
})

const Course = model('Course', CourseSchema)
export default Course	