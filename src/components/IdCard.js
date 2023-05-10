

const IdCard = ({lastName, firstName, gender, height, birth, picture })=> {
    return(

<div className="id-card">
    <tr>
    <td>
    <img src={picture} alt={`${firstName} ${lastName}`}/></td>
    </tr>

    <div className="id-card-info">
    <p><strong>First name:</strong>{firstName}</p>
        <p><strong>Last name:</strong>{lastName}</p>
        <p><strong>Gender:</strong>{gender}</p>
        <p><strong>Height:</strong>{height/100}</p>
        <p><strong>Birth:</strong>{birth.toLocaleDateString()}</p>

    </div>
</div>



    )

}

export default IdCard