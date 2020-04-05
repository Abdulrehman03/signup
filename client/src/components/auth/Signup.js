import React, { Fragment, useState, useEffect } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux'
import { register, loadUsers } from '../../actions/auth'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
// import  'materialize-css'
let usersName = [];

let counter = true



const Signup = ({ register, loadUsers, users }) => {


    var chip = {
        tag: 'chip content',
        image: '', //optional
    };



    useEffect(() => {
        if (counter == true) {
            loadUsers()
            counter = false;

        }
        let userData = {}
        if (users) {
            users.map((user) => {
                userData[user.name] = null
            })

            console.log(userData)
        }


        window.$('.register .chips').chips();
        window.$('.register .chips-initial').chips({
            data: [{
                tag: 'Apple',
            }, {
                tag: 'Microsoft',
            }, {
                tag: 'Google',
            }],
        });
        window.$('.register .chips-placeholder').chips({
            placeholder: 'Enter a tag',
            secondaryPlaceholder: '+Tag',
        });



        // props.data.users.forEach((user)=>{
        //     userData[user.name] = null
        // })
        window.$('.register .chips-autocomplete').chips({
            autocompleteOptions: {
                data: userData,
                limit: Infinity,
                minLength: 1
            }
        });
     
        console.log( window.$('.register .chips').chips())


        // We should get Chips array in this 
        // window.$('.register .chips').chips()[0].M_Chips.chipsData



    });
    const [check, setCheck] = useState({
        checked: true
    })
    const onCheck = () => {
        setCheck({ ...check, checked: !check.checked })
        console.log(check)

    }

    // const [chipsData, setChipsData] = useState({ chips: '' })
    // const setChip = (e) => {
    //     setChipsData({ ...chipsData, chips: e.taget.value })
    // }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        university: '',
        rollnumber: '',
        cnic: '',
        users: []
    })
    const { name, email, university, rollnumber, cnic, password } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        // console.log(chipsData)
        e.preventDefault();
        register(formData)




    }

    return (
        <div className="register">

            <div class="row" >
                <div class="col s12 m7" id="registerMain">
                    <form onSubmit={e => onSubmit(e)}>
                        <div id="registerCard" class="card">
                            <div class="card-image">
                                <img src="card.jpg" />
                                <span class="card-title">Sign Up</span>
                            </div>
                            <div class="card-content" id="registerCardContent">
                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="name" type="text" class="validate" value={name} name="name" onChange={e => onChange(e)} />
                                        <label for="name">Name</label>
                                    </div>
                                </div>
                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="email" type="email" class="validate" value={email} name="email" onChange={e => onChange(e)} />
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="password" type="password" class="validate" value={password} name="password" onChange={e => onChange(e)} />
                                        <label for="password">Password</label>
                                    </div>
                                </div>
                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="university" type="text" class="validate" value={university} name="university" onChange={e => onChange(e)} />
                                        <label for="university">University</label>
                                    </div>
                                </div>

                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="rollnumber" type="number" class="validate" value={rollnumber} name="rollnumber" onChange={e => onChange(e)} />
                                        <label for="rollnumber">Roll Number</label>
                                    </div>
                                </div>
                                <div class="row" id="registerTextFields">
                                    <div class="input-field col s12">
                                        <input id="cnic" type="number" class="validate" value={cnic} name="cnic" onChange={e => onChange(e)} />
                                        <label for="cnic">CNIC</label>
                                    </div>
                                </div>
                                <label>
                                    <input id="checkBox" type="checkbox" onClick={e => onCheck(e)} />
                                    <span>Request Group</span>
                                </label><br />
                                {check.checked == false &&
                                    <div>
                                        <div class="row" id="registerTextFields">
                                            <div class="input-field col s12">
                                                <input id="university" type="text" class="validate" value={university} name="university" onChange={e => onChange(e)} />
                                                <label for="university">Group Name</label>
                                            </div>
                                        </div>

                                        <div class="chips chips-autocomplete"></div>
                                    </div>}



                            </div>
                            <div class="card-action" id="registerButton">

                                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                                      <i class="material-icons right">send</i>
                                </button>
                            </div>
                            <ToastsContainer position={ToastsContainerPosition.TOP_RIGHT} store={ToastsStore} />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    users: state.auth.allUsers.users
})
export default connect(mapStateToProps, { register, loadUsers })(Signup)
