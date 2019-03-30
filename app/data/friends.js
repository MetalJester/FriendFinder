// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// ===============================================================================

module.exports = {

    oldFriends = [
        {
            name: 'Ahmed',
            photo:
                'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
            scores: ['5', '1', '4'],
        },
        {
            name: 'Jacob Deming',
            photo:
                'https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg',
            scores: ['4', '2', '5'],
        },
        {
            name: 'Jeremiah Scanlon',
            photo: 'https://avatars2.githubusercontent.com/u/8504998?v=3&s=460',
            scores: ['5', '2', '2'],
        },
        {
            name: 'Louis T. Delia',
            photo:
                'https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg',
            scores: ['3', '3', '4'],
        },
        {
            name: 'Lou Ritter',
            photo:
                'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg',
            scores: ['4', '3', '4'],
        },
        {
            name: 'Jordan Biason',
            photo:
                'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg',
            scores: ['4', '4', '2'],
        },
    ],
    
    newFriend = {
        name: 'Leo',
        photo:
            'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
        scores: ['5', '1', '4'],
    },
    
    findMatch: function() {
        // all the scores compared
        var smallestCompScore = 9999;
        var smallestPerson;
    
        //looping thru old friends
        for (var oldFrIndx = 0; oldFrIndx < oldFriends.length; oldFrIndx++) {
    
            var currentScore = 0; // holds the results of the comparison to save it to push at end of loops
    
            //compare each old friend with  new friend
            //looping through the score from 0 to 9 (index numbers always start @ 0 not @1)
    
            for (var scoreIdx = 0; scoreIdx < 3; scoreIdx++) {
                //modify current score here
                currentScore = currentScore +
                    Math.abs(
                        newFriend.scores[scoreIdx] - oldFriends[oldFrIndx].scores[scoreIdx]
                    );
    
            }
            //updates the smallestCompScore array
    
            if (currentScore < smallestCompScore) {
                smallestCompScore = currentScore;
                smallestPerson = oldFriends[oldFrIndx];
            }
        }
    
        // results of compared scores; these are the compatability scores
        console.log(smallestPerson); /// this is the whole object
        console.log(smallestPerson.name); /// this is just the the name of the result
    
    }

    
}




