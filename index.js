const contacts = [
    {
        name: 'Harry Potter',
        imgUrl: 'https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg',
        phone: '+63 9123 234 456',
        email: 'harrypotter@gnc.edu.ph'
    },
    {
        name: 'Michael Jordan',
        imgUrl: 'https://hoopshype.com/wp-content/uploads/sites/92/2021/11/i_1f_b0_57_michael-jordan.png?w=1000&h=600&crop=1',
        phone: '+63 9123 456 789',
        email: 'michaeljordan@gnc.edu.ph'
    },
    {
        name: 'John Doe',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhleDZapHPxuvvqWnMFOkQ6xTuPYUTCLTSOxLMxTzAgpyeifNXtlD_o1-83uBj7fCgtI&usqp=CAU',
        phone: '+63 9123 789 456',
        email: 'johndoe@gnc.edu.ph'
    },
    {
        name: 'Jane Doe',
        imgUrl: 'https://us.123rf.com/450wm/apoev/apoev1901/apoev190100092/126178797-person-gray-photo-placeholder-woman-in-costume-on-gray-background.jpg',
        phone: '+63 9123 234 789',
        email: 'janedoe@gnc.edu.ph'
    },
    {
        name: 'Lance Harvey A. Sarmiento', // this should be your name
        imgUrl: 'https://group16.co.za/wp-content/uploads/2021/10/male-blank.jpg',
        phone: '+63 9172 345 678',
        email: 'lanceharvey.sarmiento@gnc.edu.ph' // this should be your gnc email
    }
];


function MyCard(props){

    return(

            
    <div>   
        <div className = "header"><h1>{props.title}</h1></div>
            <div className = "container">
                <div className = "card">
                        <img className = "image" src={props.imgUrl}></img>                
                        <h2>{props.name}</h2>
                        <p>{props.phone}</p>
                        <p>{props.email}</p>
                </div>     
        </div>
    </div>

    )

}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
<div>
<div>
    <MyCard 
        title="Contact List"
        imgUrl= {contacts[0].imgUrl}
        name = {contacts[0].name}
        phone = {contacts[0].phone}
        email = {contacts[0].email}
    />
</div>

<div>
    <MyCard
        imgUrl= {contacts[1].imgUrl}
        name = {contacts[1].name}
        phone = {contacts[1].phone}
        email = {contacts[1].email}
    />
</div>

<div>
    <MyCard
        imgUrl= {contacts[2].imgUrl}    
        name = {contacts[2].name}
        phone = {contacts[2].phone}
        email = {contacts[2].email}
    />
</div>

<div>
    <MyCard
        imgUrl= {contacts[3].imgUrl}    
        name = {contacts[3].name}
        phone = {contacts[3].phone}
        email = {contacts[3].email}
    />
</div>

<div>
    <MyCard
        imgUrl= {contacts[4].imgUrl}    
        name = {contacts[4].name}
        phone = {contacts[4].phone}
        email = {contacts[4].email}
    />
</div>

</div>

)