## Problems Area

1.Navbar looks recent and overflows on small screens 
2.Home.js : (i) Overflowing and look bad on small screens.
(ii) whoweare div - On small screens, the text aligns to the left, and the image goes down, overflowing the body.
(iii) ourpride div- On small screens, the text aligns to the left, and the image goes down, overflowing the body.
(iv) outpledge div - On small screens, the text is centered, but the image size is very large, which doesn't look good.
(v) ourhonour div - The layout is fine, but improvements can be made for responsiveness, which animationi is applied already is not correct.
(vi) OverValue div - in this the image should be show with animation but it is not perfect for small screens.
3. Footer component : on big screens this looks good but for small screens all content of footer aligns at left side in a column so this very bad.


## Solution Area
1. Add a media query to make the navbar responsive. Use flex-wrap or a hamburger menu for small screens.
2. (i) Wrap links inside a responsive container and use flex-wrap for better alignment and we can remove these links to here
   (ii) in this div add media query for small screens and increase width for this div
   (iii) in this div add media query for small screens and increase width for this div
   (iv) 
