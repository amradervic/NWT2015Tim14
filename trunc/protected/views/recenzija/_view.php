<?php
/* @var $this RecenzijaController */
/* @var $data Recenzija */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('idRecenzija')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->idRecenzija), array('view', 'id'=>$data->idRecenzija)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('datumObjave')); ?>:</b>
	<?php echo CHtml::encode($data->datumObjave); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('Opis')); ?>:</b>
	<?php echo CHtml::encode($data->Opis); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('Objekat_idObjekat')); ?>:</b>
	<?php echo CHtml::encode($data->Objekat_idObjekat); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('Korisnici_idKorisnik')); ?>:</b>
	<?php echo CHtml::encode($data->Korisnici_idKorisnik); ?>
	<br />


</div>