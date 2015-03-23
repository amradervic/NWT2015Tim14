<?php
/* @var $this PrivatnaPorukaController */
/* @var $data PrivatnaPoruka */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('idPrivatnaPoruka')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->idPrivatnaPoruka), array('view', 'id'=>$data->idPrivatnaPoruka)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('vrijemeSlanja')); ?>:</b>
	<?php echo CHtml::encode($data->vrijemeSlanja); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('naslov')); ?>:</b>
	<?php echo CHtml::encode($data->naslov); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('poruka')); ?>:</b>
	<?php echo CHtml::encode($data->poruka); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('Korisnici_idKorisnik')); ?>:</b>
	<?php echo CHtml::encode($data->Korisnici_idKorisnik); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('Korisnici_idKorisnik1')); ?>:</b>
	<?php echo CHtml::encode($data->Korisnici_idKorisnik1); ?>
	<br />


</div>