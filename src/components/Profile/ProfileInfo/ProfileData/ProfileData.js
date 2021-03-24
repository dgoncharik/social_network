import css from "../ProfileInfo.module.css";
import {Field, Form} from "react-final-form";
import {Input, Textarea} from "../../../Common/CustomFormElements/CustomFormElements";
import {composeValidators, required} from "../../../../utils/validators/validators";
import {useState} from "react";

const ProfileData = ({profile, isOwner, saveProfileData}) => {
  const [editMode, setEditMode] = useState(false);

  return (
      <div className={css.profileData}>
        {editMode ?
            <ProfileDataEditMode
                setEditMode={setEditMode}
                profile={profile}
                isOwner={isOwner}
                saveProfileData={saveProfileData}
            /> :
            <ProfileDataViewMode
                setEditMode={setEditMode}
                profile={profile}
                isOwner={isOwner}
            />
        }
      </div>
  )
}

const ProfileDataViewMode = ({profile, isOwner, setEditMode}) => {

  return (
      <div className={css.profileData_viewMode}>
        <ul>
          <li>
            {'Имя: ' + profile.fullName}
          </li>
          <li>
            {'Обо мне: ' + profile.aboutMe}
          </li>
          <li>
            {'Ищу работу: ' +  (profile.lookingForAJob ? 'Да' : 'Нет')}
          </li>
          <li>
            {'Описание о работе: ' + profile.lookingForAJobDescription}
          </li>
        </ul>

        <h4>Контакты:</h4>
        <ul>
          { Object.entries(profile.contacts).map(([key, value]) => {
            return <Contact
                key={key}
                title={key}
                link={value}
            />
          }) }
        </ul>
        {isOwner && <button onClick={()=> setEditMode(true)}>Редактировать данные</button>}
      </div>
  )
}

const ProfileDataEditMode = ({profile, setEditMode, saveProfileData}) => {
  const onSubmit = async (formData) => {
    const response = await saveProfileData(formData);
    if (response && response['FINAL_FORM/form-error']) return response;
    setEditMode(false);
  }

  const cancelEditMode = () => {
    setEditMode(false);
  }

  return (
      <Form
          render={ProfileDataForm}
          onSubmit={onSubmit}
          resetOnclick={cancelEditMode}
          initialValues={profile}
          profile={profile}
      />
  )
}

const ProfileDataForm = ({submitError, handleSubmit, resetOnclick, profile}) => {
  return (
      <form className={css.profileDataForm}>
        <p>
          <label htmlFor="fullName">Имя: </label>
          <Field id="fullName" name="fullName" component={Input} placeholder="Имя"  />
        </p>
        <p>
          <label htmlFor="aboutMe">Обо мне: </label>
          <Field id="aboutMe" name="aboutMe" component={Textarea} validate={composeValidators(required)} />
        </p>
        <p>
          <label className={css.inline} htmlFor="lookingForAJob">Ищу работу: </label>
          <Field id="lookingForAJob" name="lookingForAJob" component={Input} type={"checkbox"} />
        </p>
        <p>
          <label htmlFor="lookingForAJobDescription">Описание о работе: </label>
          <Field id="lookingForAJobDescription" name="lookingForAJobDescription" component={Textarea} validate={composeValidators(required)} />
        </p>
        <p style={{color:"red", fontWeight: "bold"}}>
          {submitError}
        </p>
        <div>
          <h4>Контакты: </h4>
          <ul>
            {Object.entries(profile.contacts).map(([key, value]) => {
                  return (
                      <li key={key}>
                        <label htmlFor={key}>{key} </label>
                        <Field id={key} name={`contacts.${key}`} component={Input}/>
                      </li>
                  )
                }
            )}
          </ul>
        </div>
        {<button onClick={handleSubmit}>Сохранить</button>}
        {<button onClick={resetOnclick} type={'reset'}>Отмена</button>}
      </form>
  )
}

const Contact = ({title, link}) => {
  return (
      <li>
        <b>{title}</b>: {link}
      </li>
  )
}

export default ProfileData