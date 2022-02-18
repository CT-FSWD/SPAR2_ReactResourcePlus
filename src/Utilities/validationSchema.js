import * as Yup from 'yup';


const catSchema = Yup.object().shape({
    CategoryName: Yup.string().max(25, 'Max 25 Characters').required('Required'),
    CategoryDescription: Yup.string().max(50, 'Max 50 Characters')
})


const resourceSchema = Yup.object().shape({
    "Name": Yup.string().max(25, 'Max 25 Characters').required(),
    "Description": Yup.string().max(50, 'Max 50 Characters'),
    "Url": Yup.string().max(75, 'Max 75 Characters').required(),
    "LinkText": Yup.string().max(25, 'Max 25 Characters').required(),
    "CategoryId" : Yup.number()        
})

export {resourceSchema};
export default catSchema;
