using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerShooting : MonoBehaviour
{
    public GameObject bulletPrefab;
    public float fireRate = 0.25f;
    public Vector3 bulletOffset = new Vector3(0, 0.9f, 0);
    float coolDownTimer = 0;//Cool down time for main blaster


    // Update is called once per frame
    void Update()
    {
        coolDownTimer -= Time.deltaTime;//every frame, cool down time decreases

        //hold down the space bar to shoot
        if (Input.GetButton("Fire1") && coolDownTimer <= 0)
        {
            //Shoot the bullet, then reset bullet timer
            coolDownTimer = fireRate;//Set back to 0.25

            Vector3 offset = transform.rotation * bulletOffset;

            Instantiate(bulletPrefab, transform.position + offset, transform.rotation);
        }
    }
}
