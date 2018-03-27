## Purpose

To allow anyone including non-spotify users to contribute to a collective queue.

## What it does

Spotify offers a usable, but restrictive collaborative playlist function. We extended this function to anyone wanting to participate in the fun.

## How it works

When a host, that has spotify premium, creates a new "party", they can then share a code with anyone wanting to add songs to the playlist. When a host creates a new party, they are asked to sign in, and are given a unique access token. This access token is then uploaded to our database. When a guest decides to join the host's party, they grab the access token that was previously uploaded, and use that access token to get access to Spotify's API. This allows each guest to add songs to a playlist on behalf of the host

## Challenges

Since Spotify doesn't allow people to add to playlists that they don't own through the use of their API, we had to come up with a workaround 

##What's next

Unfortunately, this is against Spotify's Terms of Services, so this isn't a project that can be expanded on too much, but even so, being able to present this to Spotify would be our next step. According to our research there is a big desire for this kind of functionality. If a blatant workaround is popular enough, Spotify may consider adding this functionality .
