import "./ContactMail.css"

const ContactMail = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Gagnez du temps et de l'argent !</h1>
      <span className="mailDesc">Inscrivez-vous et nous vous enverrons les meilleures offres</span>
      <div className="mailInputContainer">
              <input type="text" placeholder="Votre Email" />
              <button>Inscrivez-vous</button>
              <label className="inputCheck"> "Envoyez-moi un lien pour télécharger GRATUITEMENT l'appli Booking.com&nbsp;!"
                  <input type="checkbox" name="" id="" />
              </label>
              
        
      </div>
    </div>
  )
}

export default ContactMail