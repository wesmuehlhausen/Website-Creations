using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class PlayerMovement : MonoBehaviour
{
    //variables
    public float maxSpeed = 5f;
    public float rotSpeed = 180f;
    public Transform myTarget;
    public float x;
    public float y;
    public float z;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        playerMove();
    }

    //HELPER FUNCTIONS



    //ship movement 
    void playerMove()
    {
        //rotational

        Quaternion rot = transform.rotation;//get ships current rotation info in rot
        z = rot.eulerAngles.z; //get the z rotation value from that

        x = Input.GetAxis("Horizontal");
        y = Input.GetAxis("Vertical");

        //Note: Ship is shaking because it is bouncing in and out of place

        //PERFECT LEFT
        if ((z >= 89 && z <= 91) && (x < 0))
            z = 90;
        //PERFECT RIGHT
        else if((z <= 271 && z >= 269) && (x > 0))
            z = 270;
        //Rotate LEFT from TOP
        else if ((z < 89 || z > 270) && (x < 0))
            z += Math.Abs(x);
        //Rotate LEFT from DOWN
        else if ((z > 91 && z <= 270) && (x < 0))
            z -= Math.Abs(x);
        //Rotate RIGHT from TOP
        else if ((z < 90 || z > 270) && (x > 0))
            z -= Math.Abs(x);
        //Rotate RIGHT from DOWN
        else if ((z >= 90 && z < 270) && (x > 0))
            z += Math.Abs(x);
       

        rot = Quaternion.Euler(0, 0, z);
        transform.rotation = rot;





        //forward and backwards
        Vector3 pos = transform.position;
        Vector3 velocity = new Vector3(0, Input.GetAxis("Vertical") * maxSpeed * Time.deltaTime, 0);
        pos += rot * velocity;
        transform.position = pos;
    }


}
