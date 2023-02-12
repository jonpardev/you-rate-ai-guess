# You Rate, aI Guess

![Screenshot](https://repository-images.githubusercontent.com/599682434/aa2fd674-cdd3-4855-9bd3-b534f99cfbe2)

> Link: [jonpardev.github.io/you-rate-ai-guess](https://jonpardev.github.io/you-rate-ai-guess)

## v1

- Users write reviews for movies and then AI will predict the rating the user would give.
- It is designed for encouraging people to leave reviews and collecting data for fine tuning.

## Recommendation

- [Yarn](https://yarnpkg.com/getting-started/install)

## Getting Started (with Yarn pnp)

1.  `yarn`
2.  `yarn dev`

## Structure
![Structure](https://raw.githubusercontent.com/jonpardev/you-rate-ai-guess/main/.README/you-rate-ai-guess.png)
- Frontend uses Github Pages, Firebase Authentication and React.
- Backend uses Koyeb, Firebase(Authentication and Firestore), TDBM API.

> ### Why?
> - Used a separated backend to protect private keys and to control the usage of third-party APIs.

## APIs

- GET `/api/search?q=string`: with search params, it returns a movie list from TDBM was queried with `string`
- POST `/api/review`: with bearer token for authorization, it turns predicted score for the review.