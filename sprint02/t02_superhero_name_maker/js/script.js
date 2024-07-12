function superhero() {
    let name, nameReg, gender, age, genderReg, ageReg, description;

    name = prompt('What animal is the superhero most similar to?', '');
    nameReg = new RegExp('^[a-zA-Z]+$');

    if (!nameReg.test(name) || name.length > 20) {
        alert('The name is too long or contains invalid characters');
        return;
    }

    gender = prompt('Is the superhero male or female? Leave blank if unknown or other.', '');
    genderReg = new RegExp('^(male|female)?$', 'i');

    if (!genderReg.test(gender)) {
        alert('The gender is invalid');
        return;
    }

    age = prompt('How old is the superhero?', '');
    ageReg = new RegExp('^[1-9][0-9]+$');

    if (!ageReg.test(age) || age.length > 5) {
        alert('The age is invalid');
        return;
    }

    if (gender.toLowerCase() === "male") {
        description = age < 18 ? "boy" : "man";
    } else if (gender.toLowerCase() === "female") {
        description = age < 18 ? "girl" : "woman";
    } else {
        description = age < 18 ? "kid" : "hero";
    }

    alert(`The superhero name is: ${name}-${description}!`);
}

superhero();