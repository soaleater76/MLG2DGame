#pragma strict

var GroundPrefab : GameObject;

function Start () 
{
	SpawnPrefabs();
}

function Update () 
{
	
}

function SpawnPrefabs()
{
	Instantiate(GroundPrefab, transform.position, Quaternion.identity);
	WaitForSeconds(1);
	SpawnPrefabs();
}