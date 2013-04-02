{{{
  "title" : "Capistrano Deploy - DENIED by fallthru",
  "tags"  : [ "capistrano", "deploy", "ssh" ],
  "category" : "Ruby",
  "date" : "02-27-2013"
}}}

This is a pretty short and sweet post. Spent about an hour or two today fighting this little doozy.

If you're trying to deploy your code with [Capistrano](https://github.com/capistrano/capistrano) and keep getting errors like "DENIED by fallthru", "The remote end hung up unexpectedly", or even Capistrano asking for your deploy user password (you are using authorized_keys on the server, aren't you?!) then give this a shot.

    ssh-add

That's it... that's the magic command. If you are using a different public key, other than the default id_rsa.pub, then just pass your private key.

    ssh-add ~/.ssh/other_key

This fixes an odd bug that makes ssh-agent forget which RSA and DSA keys you're supposed to be using.